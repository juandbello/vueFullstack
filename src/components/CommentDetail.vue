<template>
      <div class="md:container md:mx-auto">
        <section>
            <div v-if="comments[0] != undefined">
                <h1>{{comments[0].characterName}}</h1>
            </div>
            
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>Nombre de la Persona</th>
                        <th>Comentario</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr v-for=" (comment, index) in comments" :key="index">
                        <td> {{comment.personName}}</td>
                        <td> {{comment.comment}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </section>
    </div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from "vue";
 import {Comment} from "@/interfaces/Comment";
 import  {getComments} from '@/services/CommentService'
 
 export default defineComponent({
     data(){
         return{
             comment:{} as Comment,
             comments:{} as Comment[]
         };
     },
     methods:{
         async loadComments(){
           await getComments(this.comment).then(
                response => {
                    console.log(response);
                    this.comments = response.data;
                }).catch(error => {
                    console.log(error)
            });
         
         }
     },
     mounted(){
        this.comment.idCharacter = this.$route.params.id.toString();
        this.loadComments();
     }

 });
 
 </script>