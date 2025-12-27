import withData from "./withUserData";
import UserCompon from "../UI/UserCompon";
import PostComp from "../UI/PostComp";

export const EnhaceCompontWithUserData = withData(UserCompon)

export const EnhaceCompontWithPostData = withData(PostComp)