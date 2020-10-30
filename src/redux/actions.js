export function setList (value) {
   return {
        type: "SET_LIST",
        value: value.sort((a,b)=> new Date(b.updated_at)-new Date(a.updated_at))
    }
}
export function setLastSearch (value) {
    return {
         type: "SET_LASTSEARCH",
         value:value
     }
 }
 export function setNextPage (value) {
    return {
         type: "SET_NEXTPAGE",
         value:value
     }
 }
 export function addFavorite (value) {
    return {
         type: "ADD_FAVORITES",
         value:value
     }
 }
 export function deleteFavorite (value) {
    return {
         type: "DELETE_FAVORITES",
         value:value
     }
 }
 export function setLoading (value) {
    return {
         type: "SET_LOADING",
         value:value
     }
 }
 export function setError (value) {
    return {
         type: "SET_ERROR",
         value:value
     }
 }

 