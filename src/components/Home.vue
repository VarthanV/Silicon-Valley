<template>
<div>
  <v-container v-for="employee in employees" :key="employee.id" >
  <v-card>
    <v-card-text>
      <div style="text-align:center;">
        <h1> <router-link :to="{ name:'EmployeeDetail',params:{id:employee.id}}" style="color:black;"> {{employee.name}} </router-link></h1>
         
      </div>
      <div>
      
      </div>
     <p id="text" style="padding:20px; font-size:20px;"> {{employee.about|truncate}}  <router-link :to="{name:'EmployeeDetail',params:{id:employee.id}}" style="color:black;"> Read More </router-link></p>
     <div style="text-align:center;">
     <v-img :src="employee.imgUrl"  width="50%" style="text-align:center;"> </v-img>
     </div>

      
    </v-card-text>
  </v-card>

  </v-container>
</div>

</template>

<script>
import firebase from 'firebase';

  export default {
    name:"Home",
    data(){
      return{
        employees:[]
      }
    },
     beforeCreate(from,to,next){
       var db=firebase.firestore();
       db.collection('employees').get().then(snapshot =>{
           snapshot.forEach(doc =>{
              var data={
           id:doc.data().id,
           name:doc.data().name,
           age:doc.data().age,
           position:doc.data().position,
           about:doc.data().about,
           imgUrl:doc.data().imgUrl
           
         }
         this.employees.push(data)
            
           })
       })


   },
   
     
  };
</script>

<style scoped>
.text{
  font-size: 30px;
}



</style>
