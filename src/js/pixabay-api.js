import axios from 'axios';

const getImgs = async (userRequest, page) =>{
const res = await axios.get('https://pixabay.com/api/',{
    params:
            {
            key: '49241808-b19f3ed80577ae196aabc5d53',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            q: userRequest,
            per_page: 15,
            page: page,
            }
    })
    
            return res.data;

}
 
 export default getImgs;
