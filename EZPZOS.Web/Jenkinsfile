pipeline {
    agent { label 'amazon-linux' }
    environment {
        UAT_BUCKET = 'uat-neo-s3-well-sponge'
        PROD_BUCKET = 'prd-neo-s3-active-pangolin'
        CORE_REPO_URL = 'https://github.com/EZPZ-OS/EZPZOS.Core'  // 核心依赖仓库URL
        GIT_CREDENTIALS_ID = 'git-credentials' // Jenkins中配置的git凭证ID
        UAT_AWS_CREDENTIALS_ID = 'uat-aws-jenkins-user-credentials' // Jenkins中配置的AWS凭证ID
        PROD_AWS_CREDENTIALS_ID = 'prod-aws-jenkins-user-credentials' // Jenkins中配置的AWS凭证ID
    }
    stages {
        stage('Print Agent Info') {
            steps {
                script { 
                    echo "Running on agent: ${env.NODE_NAME}"
                    sh 'echo "Agent details:"'
                    sh 'uname -a'
                    sh 'whoami'
                    sh 'docker --version'
                }
            }
        }
        stage('Package') {
            steps {
                script {
                    docker.image('node:18').inside("-v /tmp/jenkins/workspace:/tmp/jenkins/workspace:rw,z") {
                        echo "Cloning core repository with credentials..."
                        dir('../EZPZOS.Core') {
                            git branch: 'main', credentialsId: "${GIT_CREDENTIALS_ID}", url: "${CORE_REPO_URL}"
                            sh 'npm install'
                            sh 'npm run build'
                        }
                        
                        echo "Building the React app..."
                        sh 'npm install Buffer'
                        sh 'npm install'
                        sh 'npm run build'
                        sh 'ls -la'
                    }
                }
            }
        }
        stage('Upload to UAT S3') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "${UAT_AWS_CREDENTIALS_ID}"]]) {
                        sh "docker run \
                        -e AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} \
                    -e AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} \
                        -v /tmp/jenkins/workspace/EZPZOS.Web/dist:/dist \
                        amazon/aws-cli:latest \
                        s3 sync --delete /dist/ s3://${UAT_BUCKET}/"
                    }
                }
            }
        } 
        stage('Upload to Prod S3') {
            steps {
                script {
                    timeout(time: 10, unit: 'MINUTES') {
                        input message: 'Do you want to proceed with uploading to Prod S3?', ok: 'Yes, proceed'
                    }
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "${PROD_AWS_CREDENTIALS_ID}"]]) {
                        sh "docker run \
                        -e AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} \
                        -e AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} \
                        -v /tmp/jenkins/workspace/EZPZOS.Web/dist:/dist \
                        amazon/aws-cli:latest \
                        s3 sync --delete /dist/ s3://${PROD_BUCKET}/"
                    }
                }
            }
        }
    }
}
