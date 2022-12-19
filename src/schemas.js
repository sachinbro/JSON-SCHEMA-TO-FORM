const schemas = [
  {
    title: "Contact Form",
    details: {
      name: {
        type: "text",
        element: "input",
        title: "Full Name",
        placeholder: "Ram Bhattarai",
      },
      email: {
        type: "email",
        element: "input",
        title: "Email",
        placeholder: "example@abc.com",
      },
      phone: {
        type: "string",
        element: "input",
        title: "Phone",
        placeholder: "123-456-7890",
      },
      password: {
        type: "password",
        element: "input",
        title: "Password",
        placeholder: "at least 10 characters",
      },
      gender: {
        type: "text",
        element: "select",
        placeholder: "Select gender",
        title: "Gender",
        options: ["male", "female", "other"],
      },
      feedback: {
        type: "text",
        element: "textarea",
        title: "Feedback",
        placeholder: "Your feedback is important to us",
      }
    },
  },
  // {
  //   title: "login form",
  //   details: {
  //     email: {
  //       type: "email",
  //       element: "input",
  //       title: "Email",
  //       placeholder: "examble@abc.com",
  //     },
     
  //   },
  // },
  // {
  //   title: "Registration Form",
  //   details: {
  //     name: {
  //       type: "text",
  //       element: "input",
  //       title: "Full Name",
  //       placeholder: "Ram Bhattarai",
  //     },
     
  //     email: {
  //       type: "email",
  //       element: "input",
  //       title: "Email",
  //       placeholder: "example@abc.com",
  //     },

  //     password: {
  //       type: "password",
  //       title: "Password",
  //       element: "input",
  //       placeholder: "at least 10 characters",
  //     },
  //     repassword: {
  //       type: "password",
  //       element: "input",
  //       title: "Re-Password",
  //       placeholder: "",
  //     },
  //   },
  // },
  // {
  //   title: "Feedback Form",
  //   details: {
  //     name: {
  //       type: "text",
  //       element: "input",
  //       title: "Full Name",
  //       placeholder: "Ram Bhattarai",
  //     },
      
  //   }
  // }
];

export { schemas };
