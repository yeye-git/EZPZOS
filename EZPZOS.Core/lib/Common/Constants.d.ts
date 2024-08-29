export declare const LogLevel: {
    ERROR: number;
    WARN: number;
    INFO: number;
    DEBUG: number;
    TRACE: number;
    ALL: number;
};
export declare const LogLevelToString: {
    [index: number]: string;
};
export declare const DefaultTargetLogLevel: number;
export declare const LogFilePath = "src/../Log";
export declare const LogFileName: string;
export declare const BooleanTrueString = "true";
export declare const BooleanFalseString = "false";
export declare const DefaultOTPVerificationValues: {
    AccountSidDefaultValue: string;
    AuthTokenDefaultValue: string;
    ServiceSidDefaultValue: string;
};
export declare const DefaultJWTSecretKey = "7575922d869d79166c8b9e113ae0dc03b146a1c622f9bb5fdd9021d1901604be";
export declare const JWTLoginTokenExpiringPeriod = "1d";
export declare const JWTOTPTokenExpiringPeriod = 300;
export declare const DefaultPortNumber = 8000;
export declare const DefaultMenuRoutesValues: {
    DineInDefaultValue: string;
    TakeAwayDefaultValue: string;
    DineInRouteDefaultValue: string;
    TakeAwayRouteDefaultValue: string;
    DineInToastDefaultValue: string;
    TakeAwayToastDefaultValue: string;
    TableNumberDefaultValue: string;
};
export declare const DefaultRestaurantDetails: {
    NameDefaultValue: string;
    AddressDefaultValue: string;
    TagsDefaultValue: string[];
    PhoneDefaultValue: string;
    HoursDefaultValue: string[];
    AllergyInfoDefaultValue: string;
};
export declare const DefaultLoginSignupValues: {
    LoginHeading: string;
    LoginSubtitle: string;
    SignupHeading: string;
    SignupSubtitle: string;
    VerifiedOTPHeading: string;
    VerifiedOTPSubtitle: string;
    PolicyDefaultValue: {
        HeadingDefaultValue: string;
        TermsDefaultValue: string;
        PrivacyDefaultValue: string;
        ContentDefaultValue: string;
    };
    ContactFormDefaultValue: {
        PhoneRegionDefaultValue: string;
        ThreeDots: string;
        OR: string;
        SendOTPDefaultValue: string;
        GoogleDefaultValue: string;
        SigninDefaultValue: string;
        SignupDefaultValue: string;
        PhoneNumberDefaultValue: string;
    };
    UserSignupFormDefaultValue: {
        UsernameLabel: string;
        UsernamePlaceholder: string;
        EmailLabel: string;
        EmailPlaceholder: string;
        PhoneNumberLabel: string;
        PhoneNumberInputTag: string;
        SubmitButtonDefaultValue: string;
        UserCreatedMessage: string;
        ErrorMessages: {
            401: string;
            403: string;
            404: string;
            409: string;
            422: string;
            500: string;
            default: string;
        };
    };
};
export declare const ClientHomePageValues: {
    IsLoggedIn: boolean;
    HomePageButtonList: {
        Img: string;
        Title: string;
    }[];
    NotificationList: {
        Title: string;
        Content: string;
    }[];
};
export declare const DefaultHomePageValues: {
    LoggedInOpening: string[];
    NotLoggedInOpening: string[];
    NotLoggedInLogo: string;
    NotLoggedInSignInButton: {
        SignInButtonDefualtValue: string;
        OfferSignUpDefaultValue: string;
        SignUpButtonDefaultValue: string;
    };
};
export declare const BusinessHomePageValues: {
    IsLoggedIn: boolean;
    HomePageButtonList: {
        Img: string;
        Title: string;
    }[];
    NotificationList: {
        Title: string;
        Content: string;
    }[];
};
export declare const GOOGLE_MAPS_API_KEY = "AIzaSyBAhprZOFyMvXznLC3JXq5BrO7BcD66NGs";
export declare const Platform: {
    Web: string;
    Library: string;
    Express: string;
};
export declare const DefaultSideBarContent: string[];
export declare const DefaultPastOrderContent: {
    Title: string;
    Back: string;
    More: string;
    Items: string;
    BtnTitle: string;
};
export declare const DefaultHotSaleValues: {
    Title: string;
    Description: string;
    DefaultTag: string;
};
export declare const DefaultBookConfirmationValues: {
    Back: string;
    KnowTitle: string;
    PhoneText: string;
    CodeText: string;
    PeopleText: string;
    FirstNameText: string;
    LastNameText: string;
    NotesText: string;
    BookingText: string;
    ReceiveText: string;
    BtnText: string;
    PhonePlaceHolder: string;
};
