import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { isErrorWithProperty } from "./isErrorWithProperty";
import { errorToast } from "../errorToast";

export const handleErrors = (error: FetchBaseQueryError) => {
    if (error) {
        switch (error.status) {
            case 'TIMEOUT_ERROR':
            case 'CUSTOM_ERROR':
            case 'FETCH_ERROR':
            case 'PARSING_ERROR':
                errorToast(error.error)
                break;
            case 404:
                if (isErrorWithProperty(error.data, 'status_message')) {
                    errorToast(error.data.status_message)
                }
                else {
                    errorToast(JSON.stringify(error.data), error.data)
                }
                break;
            case 401:
                if (isErrorWithProperty(error.data, 'status_message')) {
                    errorToast(error.data.status_message)
                }
                else {
                    errorToast(JSON.stringify(error.data), error.data)
                }
                break;
            default:
                if (error.status >= 500 && error.status < 600) {
                    errorToast("Server error occurred. Please try again later.")
                } else {
                    errorToast("Some error occurred", error)
                }
        }
    }

}
