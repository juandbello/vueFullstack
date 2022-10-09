<template>
    <div class="md:container md:mx-auto">
        <section>
            <h1>Personajes de Rick Y Morty</h1>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Especie</th>
                        <th>Genero</th>
                        <th>Operaciones</th>
                        </tr>
                </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr v-for=" (character, index) in characters.results" :key="index">
                        <td> <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" :src="character.image"></td>
                        <td> {{character.name}}</td>
                        <td> {{character.species}}</td>
                        <td> {{character.gender}}</td>
                        <td><button class="edit-button" style="font-size:small" @click="this.$router.push(`/character/${character.id}/comment`)">Comentar</button><button class="edit-button" style="font-size:small" @click="this.$router.push(`/character/${character.id}/comments`)">Ver Comentarios</button></td>
                        </tr>
                </tbody>
                </table>
            </div>
            <div class="pagination:container ">
            <div class="pagination:number arrow" v-on:click="loadComments(page-1)">
                <svg width="18" height="18">
                <use xlink:href="#left" />
                </svg>
                <span class="arrow:text">Previous</span> 
            </div>
  
            <div class="pagination:number">
                {{page}}
            </div>
            <div class="pagination:number">
                de
            </div>
            <div class="pagination:number pagination:active">
                {{pages}}
            </div>
  
            <div class="pagination:number arrow" v-on:click="loadComments(page + 1)">
                <svg width="18" height="18">
                <use xlink:href="#right" />
                </svg>
            </div>
       

            <svg class="hide">
            <symbol id="left" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></symbol>
            <symbol id="right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></symbol>
            </svg>
        </div>
        </section>
    </div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from "vue";
 import  {getCharacters} from '@/services/CommentService'
 
 export default defineComponent({
     data(){
         return{
             characters: [],
             page: 1,
             pages: 1
         };
     },
     methods:{
         async loadComments(page: any){
            console.log(page);
            this.page = (page <= 0 || page > this.pages) ? this.page : page;
            const params = {
                page: this.page
            }
               
           await getCharacters(params).then(
                response => {
                    console.log(this.page)
                    this.characters = response.data;
                    this.pages = response.data.info.pages;
                    console.log(this.characters);
                }).catch(error => {
                    console.log(error)
            });
         
         },
         
     },
     mounted(){
        this.loadComments(this.page);
     }

 });
 
 </script>