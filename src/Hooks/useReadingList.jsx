import { useContext } from "react";
import { ReadingListContext } from "../Context/readingList";

export const useReadingList = () => {
    const readinglist = useContext(ReadingListContext)

    if ( readinglist == undefined ) {
        throw new Error ('useReadingList must be used with a ReadingListContext Provider')
    }

    return readinglist
}