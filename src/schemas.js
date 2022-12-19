const schemas = [
  {
    title: "Contact Form",
    details: {
      name: {
        type: "text",
        element: "input",
        title: "Full Name",
        default: "Ram Bhattarai",
      },
      email: {
        type: "email",
        element: "input",
        title: "Email",
        default: "example@abc.com",
      },
      phone: {
        type: "string",
        element: "input",
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
        element: "input",
        title: "Email",
        default: "examble@abc.com",
      },
      password: {
        type: "password",
        element: "input",
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
        element: "input",
        title: "Full Name",
        default: "Ram Bhattarai",
      },
      gender: {
        type: "text",
        element: "select",
        default: "Select gender",
        title: "Gender",
        options: ["male", "female", "other"],
      },
      email: {
        type: "email",
        element: "input",
        title: "Email",
        default: "example@abc.com",
      },

      password: {
        type: "password",
        title: "Password",
        element: "input",
        default: "at least 10 characters",
      },
      repassword: {
        type: "password",
        element: "input",
        title: "Re-Password",
        default: "",
      },
    },
  },
  {
    title: "Feedback Form",
    details: {
      name: {
        type: "text",
        element: "input",
        title: "Full Name",
        default: "Ram Bhattarai",
      },
      feedback: {
        type: "text",
        element: "textarea",
        title: "Feedback",
        default: "Your feedback is important to us",
      }
    }
  }
];

export { schemas };
