import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES_PATH } from "../../../../router/constants";
import { getArticle } from "../../store/selectors";
import { withRouter } from "react-router";
import { actions } from "../../../../store/actions";
import { Form, Field, Formik } from "formik";
import FORMS from "../../constants/forms";
import { v4 as uuidv4 } from "uuid";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";

export default withRouter(
  ({
    match: {
      params: { id },
    },
  }) => {
    const dispatch = useDispatch();
    const [article, setArticle] = useState(null);
    const classes = useStyles();

    useEffect(() => {
      if (id !== "new") {
        dispatch(actions.FETCH_ARTICLE.REQUEST(Number(id)));
      }
    }, [dispatch]);

    const selectedArticle =
      id !== "new" ? useSelector(getArticle(Number(id))) : null;

    useEffect(() => {
      setArticle(selectedArticle);
    }, [selectedArticle]);

    const handleChangeArticle = (data) => {
      dispatch(actions.EDIT_ARTICLES.REQUEST(data));
    };

    const handleRemoveArticle = () => {
      dispatch(actions.REMOVE_ARTICLES.REQUEST(id));
      dispatch(push(ROUTES_PATH.ARTICLES));
    };

    const handleSubmit = (data) => {
      if (selectedArticle) {
        handleChangeArticle(data);
      } else {
        dispatch(
          actions.ADD_ARTICLES.REQUEST({
            ...data,
            image_url: "https://picsum.photos/id/237/200/300",
          })
        );
        dispatch(push(ROUTES_PATH.ARTICLES));
      }
    };

    const getErrors = (errors, touched, name) => {
      if (errors[name] && touched[name]) {
        return <div>{errors[name]}</div>;
      } else {
        return null;
      }
    };

    return (
      <div className="article">
        {/*<img src={article.image_url} alt={article.title} />*/}
        <Formik
          enableReinitialize={true}
          initialValues={article ? article : FORMS.ARTICLE.INIT}
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={FORMS.ARTICLE.SCHEME}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const {
              errors,
              touched,
              values: { title, description },
            } = props;
            return (
              <Form>
                <Field name="title" id="title" type="text" values={title} />
                <div>{getErrors(errors, touched, "title")}</div>

                <Field
                  name="title"
                  id="title"
                  type="text"
                  values={description}
                />
                <div>{getErrors(errors, touched, "description")}</div>
                <button type="submit"> Save Changes</button>
              </Form>
            );
          }}
        </Formik>
        <button type="button" onClick={handleRemoveArticle}>
          Remove
        </button>
      </div>
    );
  }
);
