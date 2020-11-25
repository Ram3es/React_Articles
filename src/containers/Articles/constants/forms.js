import * as Yup from "yup";

export default {
  ARTICLE: {
    INIT: {
      image: "",
      title: "",
      description: "",
    },
    SCHEME: Yup.object().shape({
      image: Yup.string().required("This field is required"),
      title: Yup.string().required("This field is required"),
      description: Yup.string().required("This field is required "),
    }),
  },
};
