import app from "./actions/app"
import salesforce from "./actions/salesforce"
import strapi from "./actions/strapi"


export default {
    ...app,
    ...strapi,
    ...salesforce
}