<template>
<div>
     <div class="post-preview">
        <router-link :to="{
            name:'post-detail',
            params:{
                id:blog.id,

               title: newTitle

               
            }
            }">
             <!--  -->
            <h2 class="post-title">
               {{ blog.title_blog }}
            </h2>
          
        </router-link>

          <p class="post-meta">Được viết bởi
            <a href="#">{{ blog.fullName }}</a> vào ngày : </p>
        {{ formatDate }}

        <p class="post-subtitle">
               {{ blog.content  }}
        </p>
         <a href="#">
            <img class="img-fluid" v-bind:src="getThumbPost" alt="">
        </a>
       
       
    </div>
<hr>
</div>
</template>

<script>
 import {removeUrlVietnamese} from '../helpers'
export default {
    name:"blog-item",
    props:{
        // blog:{type:Object, default:()=>({})
        blog:{type:Object, default:null
        }
    },
    methods: {
        
      
    },

    computed: {

     getNewUrl() {

            const newTitle =  this.blog.title_blog.split(' ').join('-').toLowerCase().replace('.' ,'').replace(',', '');
            return removeUrlVietnamese(newTitle);
            
        },

        getThumbPost(){
            return "/dist/img/" + this.blog.thumb_blog
        },
        

        formatDate(){
            // var date = this.blog.creat_at;
            // var monthName=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // var day = date.getDate();
            // var monthIndex = date.getMonth();
            // var year = date.getFullYear();
            // return day + ' ' + monthName[monthIndex] + ' ' + year;
            // if(!date) return;
           
            var date = this.blog.creat_at;
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [day,month,year].join('-');
           
              
           
        },
    },
   
}
</script>

<style>

</style>