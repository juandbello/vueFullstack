import axios from "./axios";
import rickInstance from "./axiosrick";
import {AxiosResponse} from "axios";
import {Comment} from "@/interfaces/Comment"

export const createComment = async (comment: Comment) =>{
    await axios.post('character/'+comment.idCharacter +'/comments', comment)
}

export const getComments = async (comment: Comment): Promise<AxiosResponse<Comment[]>> => 
    await axios.get('character/'+comment.idCharacter +'/comments');

export const getCharacters = async (params: any) => await rickInstance.get('/character', {params});
export const getCharacter = async (id: string) => await rickInstance.get('/character/'+ id);


