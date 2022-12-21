const schema =
  {
    title: "Register Form",
    details: {
      name: {
        type: "text",
        element: "input",
        title: "Full Name",
        placeholder: "Ram Bhattarai",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 20,
        }
      },
      email: {
        type: "email",
        element: "input",
        title: "Email",
        placeholder: "example@abc.com",
        validation: {
          required: true,
        }
      },
      phone: {
        type: "string",
        element: "input",
        title: "Phone",
        placeholder: "123-456-7890",
        validation: {
          required: true,
          minLength: 10,
        }
      },
      password: {
        type: "password",
        element: "input",
        title: "Password",
        placeholder: "at least 10 characters",
        validation: {
          required: true,
          minLength: 10,
        }
      },
    },
  };

export { schema };
