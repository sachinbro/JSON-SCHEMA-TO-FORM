const schemas = [
  {
    title: "Contact Form",
    details: {
      name: {
        type: "text",
        title: "Full Name",
        default: "Ram Bhattarai",
      },
      email: {
        type: "email",
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
        type: "email",
        title: "Email",
        default: "examble@abc.com",
      },
      password: {
        type: "password",
        title: "Password",
        default: "at least 10 characters",
      },
    },
  },
  {
    title: "Registration Form",
    details: {
      name: {
        type: "text",
        title: "Full Name",
        default: "Ram Bhattarai",
      },
      email: {
        type: "email",
        title: "Email",
        default: "example@abc.com",
      },

      password: {
        type: "password",
        title: "Password",
        default: "at least 10 characters",
      },
      repassword: {
        type: "password",
        title: "Re-Password",
        default: "",
      },
    },
  },
];

export { schemas };
