"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Platform = exports.OTPTokenExpiringPeriod = exports.LogLevelToString = exports.LogLevel = exports.LogFilePath = exports.LogFileName = exports.JWTLoginTokenExpiringPeriod = exports.GOOGLE_MAPS_API_KEY = exports.DefaultTargetLogLevel = exports.DefaultSideBarContent = exports.DefaultRestaurantDetails = exports.DefaultPortNumber = exports.DefaultPastOrderContent = exports.DefaultOTPVerificationValues = exports.DefaultMenuRoutesValues = exports.DefaultMenuCreateValues = exports.DefaultLoginSignupValues = exports.DefaultJWTSecretKey = exports.DefaultHotSaleValues = exports.DefaultHomePageValues = exports.DefaultBookConfirmationValues = exports.ClientHomePageValues = exports.BusinessHomePageValues = exports.BooleanTrueString = exports.BooleanFalseString = void 0;
var LogLevel = exports.LogLevel = {
  ERROR: 0,
  WARN: 1,
  INFO: 2,
  DEBUG: 3,
  TRACE: 4,
  ALL: 5
};
var LogLevelToString = exports.LogLevelToString = {
  0: "ERROR",
  1: "WARN",
  2: "INFO",
  3: "DEBUG",
  4: "TRACE",
  5: "ALL"
};
var DefaultTargetLogLevel = exports.DefaultTargetLogLevel = LogLevel.ALL;
var LogFilePath = exports.LogFilePath = "src/../Log";
var LogFileName = exports.LogFileName = "Log".concat(new Date().toISOString().split(".")[0].replace(/\-/gi, "").replace(/\:/gi, ""), ".log");
var BooleanTrueString = exports.BooleanTrueString = "true";
var BooleanFalseString = exports.BooleanFalseString = "false";

//OTP config
var DefaultOTPVerificationValues = exports.DefaultOTPVerificationValues = {
  AccountSidDefaultValue: "AC6bc69eb11d33e94e6fdd65afaddb7712",
  AuthTokenDefaultValue: "c9c7dda314a8728bce5d7fd4300bcb7f",
  ServiceSidDefaultValue: "VA314606b18caa89923e4c2933ee5ef4cf"
};

//JWT config
var DefaultJWTSecretKey = exports.DefaultJWTSecretKey = "7575922d869d79166c8b9e113ae0dc03b146a1c622f9bb5fdd9021d1901604be";
var JWTLoginTokenExpiringPeriod = exports.JWTLoginTokenExpiringPeriod = "1d";
var OTPTokenExpiringPeriod = exports.OTPTokenExpiringPeriod = 300; //(5m) set it in seconds for calculation in OTP

//default port number
var DefaultPortNumber = exports.DefaultPortNumber = 8000;

//Menu Routes Naming, change everything here if needed
var DefaultMenuRoutesValues = exports.DefaultMenuRoutesValues = {
  DineInDefaultValue: "Dine in",
  TakeAwayDefaultValue: "Take away",
  DineInRouteDefaultValue: "menu-dinein",
  TakeAwayRouteDefaultValue: "menu-takeaway",
  DineInToastDefaultValue: "You are now viewing the Dine In menu",
  TakeAwayToastDefaultValue: "You are now viewing the Take Away menu",
  TableNumberDefaultValue: "tableNumber"
};
//Restaurant Contact Card Naming
var DefaultRestaurantDetails = exports.DefaultRestaurantDetails = {
  NameDefaultValue: "DemoData Sichuan Cuisine",
  AddressDefaultValue: "170 LiverPool ST, Hobart 7000",
  TagsDefaultValue: ["Hot food", "Chinese food", "Crazy Tuesday"],
  PhoneDefaultValue: "0470 000 000",
  HoursDefaultValue: ["Mon-Fri: 9am - 10pm", "Sat-Sun: 10am - 11pm"],
  AllergyInfoDefaultValue: "This is place holder"
};

//LoginSignup default names
var DefaultLoginSignupValues = exports.DefaultLoginSignupValues = {
  LoginHeading: "Welcome Back",
  LoginSubtitle: "Sign in to continue :)",
  SignupHeading: "Join Us Today",
  SignupSubtitle: "To get more insight :)",
  VerifiedOTPHeading: "Fill in more details",
  VerifiedOTPSubtitle: "Get ready to discover more :)",
  PolicyDefaultValue: {
    HeadingDefaultValue: "By continuing, you agree to our",
    TermsDefaultValue: "Terms of Service",
    PrivacyDefaultValue: "Privacy Policy",
    ContentDefaultValue: "Content policies"
  },
  ContactFormDefaultValue: {
    PhoneRegionDefaultValue: "61",
    ThreeDots: "...",
    OR: "OR",
    SendOTPDefaultValue: "SEND OTP",
    GoogleDefaultValue: "Continue with Google",
    SigninDefaultValue: "SIGN IN",
    SignupDefaultValue: "SIGN UP",
    PhoneNumberDefaultValue: "Phone Number"
  },
  UserSignupFormDefaultValue: {
    UsernameLabel: "Username:",
    UsernamePlaceholder: "your username",
    EmailLabel: "email:",
    EmailPlaceholder: "example@example.com",
    PhoneNumberLabel: "Phone Number:",
    PhoneNumberInputTag: "Verified",
    SubmitButtonDefaultValue: "Create an account",
    UserCreatedMessage: "User created successfully",
    ErrorMessages: {
      401: "Unauthorized. Please try again.",
      403: "Token has expired.",
      404: "Token is missing",
      409: "User already existed.",
      422: "Missing required fields for user creation.",
      500: "Server error. Please try again.",
      "default": "An error occurred. Please try again."
    }
  },
  MobileLoginDefaultValue: {
    LoginSuccessMessage: "Login successfully.",
    LoginErrorMessage: {
      401: "Unauthorized. Please try again.",
      403: "Token has expired.",
      404: "User is not found.",
      "default": "An error occurred. Please try again."
    }
  }
};

//Client home page mock data
var ClientHomePageValues = exports.ClientHomePageValues = {
  IsLoggedIn: false,
  HomePageButtonList: [{
    Img: "DineInIcon.png",
    Title: "DINE IN"
  }, {
    Img: "BookingIcon.png",
    Title: "BOOK"
  }, {
    Img: "TakeawayIcon.png",
    Title: "TAKE AWAY"
  }],
  NotificationList: [{
    Title: "Vouchers",
    Content: "You have unused vouchers!"
  }, {
    Title: "Vouchers",
    Content: "You have unused vouchers!"
  }]
};

//HomePage default names
var DefaultHomePageValues = exports.DefaultHomePageValues = {
  LoggedInOpening: ["Hi @Username,", "Would you like to..."],
  NotLoggedInOpening: ["WELCOME BACK", ":D"],
  NotLoggedInLogo: "EZPZ OS",
  NotLoggedInSignInButton: {
    SignInButtonDefualtValue: "LOG IN",
    OfferSignUpDefaultValue: "Don't have an account? ",
    SignUpButtonDefaultValue: "Sign up :）"
  }
};

//Buisness home page mock data
var BusinessHomePageValues = exports.BusinessHomePageValues = {
  IsLoggedIn: false,
  HomePageButtonList: [{
    Img: "DineInIcon.png",
    Title: "KITCHEN"
  }, {
    Img: "BookingIcon.png",
    Title: "ADMIN"
  }],
  NotificationList: [{
    Title: "Reports",
    Content: "You have a report!"
  }, {
    Title: "Booking notification",
    Content: "You have 4 new bookings!"
  }, {
    Title: "Data",
    Content: "You have 6 tables active!"
  }]
};

//Google map API key
var GOOGLE_MAPS_API_KEY = exports.GOOGLE_MAPS_API_KEY = "AIzaSyBAhprZOFyMvXznLC3JXq5BrO7BcD66NGs";
var Platform = exports.Platform = {
  Web: "Web",
  Library: "Library",
  Express: "Express"
};

//Sidebar Content Naming, change everything here if needed
var DefaultSideBarContent = exports.DefaultSideBarContent = ["Home", "Login/Profile", "E-Recipts", "Vouchers", "Restuarant Detail", "Book", "Payment", "Settings", "Error", "Help"];

//PastOrder
var DefaultPastOrderContent = exports.DefaultPastOrderContent = {
  Title: "Past Orders",
  Back: "Back",
  More: "More orders",
  Items: "items",
  BtnTitle: "order again"
};

//Hot Sale Default Naming
var DefaultHotSaleValues = exports.DefaultHotSaleValues = {
  Title: "Hot Sale",
  Description: "80% customer has ordered",
  DefaultTag: "TOP"
};

// Book Confirmation
var DefaultBookConfirmationValues = exports.DefaultBookConfirmationValues = {
  "Back": "Back",
  "KnowTitle": "What to Know before you go",
  "PhoneText": "What's your phone number?",
  "CodeText": "+61",
  "PeopleText": "People",
  "FirstNameText": "First Name",
  "LastNameText": "Last Name",
  "NotesText": "Any notes?",
  "BookingText": "Booking Text updates",
  "ReceiveText": "Receive restaurant offer",
  "BtnText": "Continue",
  "PhonePlaceHolder": "Phone number"
};

// MenuCreate Naming, change everything here if needed
var DefaultMenuCreateValues = exports.DefaultMenuCreateValues = {
  Labels: {
    DishName: 'Dish Name*',
    DishDescription: 'Dish Description*',
    DishPrice: 'Dish Price*',
    Category: 'Category*',
    Tags: 'Tags',
    IsDishAvailable: 'Is this dish available?',
    UploadImage: 'Upload Image',
    OrText: 'OR',
    InsertButton: 'Insert',
    CancelButton: 'Cancel',
    AddNewButton: 'Add New',
    AddTagButton: 'Add Tag',
    NoImageSelected: 'No image selected',
    ImagePreview: 'Image Preview'
  },
  Messages: {
    ValidationError: "Please fill out all required fields."
  }
};