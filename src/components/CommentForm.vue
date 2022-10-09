<template>
	<div class="card">
        <div style="display:block;margin:auto;border-radius: 28px;border-radius: 10px;"> <img :src="image"></div>
        <h1 style="color:black">{{this.comment.characterName}}</h1>
		<form @submit.prevent="saveComment()">
			<div class="input">
				<input style="color:black" type="text" class="input-field" placeholder="Nombre" v-model="comment.personName" required/>
				<label class="input-label"></label>
			</div>
            <div class="input">
				<input style="color:black" type="textarea" class="input-field" placeholder="Comentario" v-model="comment.comment" required/>
				<label class="input-label"></label>
			</div>
				
			<div class="action">
				<button class="action-button">Guardar</button>
			</div>
		</form>
	</div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from "vue";
 import {Comment} from "@/interfaces/Comment";
 import  {createComment} from '@/services/CommentService'
 import  {getCharacter} from '@/services/CommentService'
 
 export default defineComponent({
     data(){
         return{
             image: '',
             comment:{} as Comment
         };
     },
     methods:{
         async saveComment(){
            await createComment(this.comment).then(
                response => {
                    this.$router.push({name: "characters"})
                    console.log(response);
                }).catch(error => {
                    console.log(error)
            });
        
         },
         async getCharacterInfo(){
            await getCharacter(this.comment.idCharacter).then(
                response => {
                    this.comment.characterName = response.data.name;
                    this.image = response.data.image;
                }).catch(error => {
                    console.log(error)
            });
        
         }
     },
     mounted(){
        this.comment.idCharacter = this.$route.params.id.toString();
        this.getCharacterInfo();
     }
 });
 
 </script>