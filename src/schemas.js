const schemas = [
  {
    title: "Contact Form",
    details: {
      name: {
        type: "string",
        title: "Full Name",
        default: "Ram Bhattarai",
      },
      email: {
        type: "string",
        title: "Email",
        default: "example@abc.com",
      },
      phone: {
        type: "string",
        title: "Phone",
        default: "123-456-7890",
      },
    },
  },
  {
    title: "login form",
    details: {
      email: {
        type: "string",
        title: "Email",
        default: "examble@abc.com",
      },
      password: {
        type: "string",
        title: "Password",
        default: "at least 10 characters",
      },
    },
  },
  {
    title: "Registration Form",
    details: {
      name: {
        type: "string",
        title: "Full Name",
        default: "Ram Bhattarai",
      },
      email: {
        type: "string",
        title: "Email",
        default: "example@abc.com",
      },
    },
    password: {
      type: "string",
      title: "Password",
      default: "at least 10 characters",
    },
    repassword: {
      type: "string",
      title: "Re-Password",
      default: "",
    },
  },
];

export default schemas;
