import API from "../config/API";

export default class FixImageUtils {
  static fixImageURL = ( filePath ) => `${ API.serverImagesURL }${ filePath }`;
}