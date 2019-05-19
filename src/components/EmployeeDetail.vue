<template>
    <v-flex style="text-align:center; padding:20px;">
     
     <h3> {{name}} </h3> <br> <br>
       
        <v-container >
            <h1 style="text-align:left;"> About </h1>
        <p id="about" style="padding:20px;">  {{about}} </p>
       
        
        </v-container>
                <div v-if="imgUrl == null ">
        <v-flex xs12 sm6 offset-sm3>
              <v-btn raised color="red" @click="onPickFile" v-if="nullval ">Upload Image</v-btn>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked">
            </v-flex>
        </div>
             <v-container>
              <img :src="imgUrl"  > 
             </v-container>
            <v-container>
               <h1 style="text-align:left;"> Age </h1> <br>
              <h3 style="text-align:left;"> {{age}}</h3>


            </v-container> 
              <v-container>
               <h1 style="text-align:left;"> Nationality </h1> <br>
              <h3 style="text-align:left;"> {{nationality}}</h3>


            </v-container> 
             <v-container>
               <h1 style="text-align:left;"> Designation</h1> <br>
              <h3 style="text-align:left;"> {{position}}</h3>


            </v-container> 

    </v-flex>
</template>

<script>
import firebase from 'firebase';
export default {
    name:"EmployeeDetail",
    data(){
        return{
            name:null,
            about:null,
            age:null,
            nationality:null,
            position:null,
            image:null,
            imgUrl:null,
            filename:null,
            nullval:true,




        }
    },
   beforeCreate(from,to,next){
       var db=firebase.firestore();
       db.collection('employees').where('id','==',this.$route.params.id).get().then(snapshot =>{
           snapshot.forEach(doc =>{
               this.name=doc.data().name,
               this.about=doc.data().about,
               this.age=doc.data().age,
               this.nationality=doc.data().nationality,
               this.position=doc.data().position,
               this.imgUrl=doc.data().imgUrl
               if(doc.data().imgUrl == null){
                   this.nullval=true;
               }
           })
       })


   },
  
  created(){
      if(this.imgUrl == null){
          this.nullval=true;
      }
  },
  watch:{
      '$route':'fetch'

  } ,
    methods:{
        fetch(){
              var db=firebase.firestore();
       db.collection('employees').where('id','==',this.$route.params.id).get().then(snapshot =>{
           snapshot.forEach(doc =>{
               this.name=doc.data().name,
               this.about=doc.data().about,
               this.age=doc.data().age,
               this.nationality=doc.data().nationality,
               this.position=doc.data().position,
               this.imgUrl=doc.data().imgUrl
               if(doc.data().imgUrl == null){
                   this.nullval=true;
               }
           })
       })



        },
         onPickFile () {
        this.$refs.fileInput.click()
      },
       onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        this.filename=filename
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imgUrl = fileReader.result

        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
       var store=firebase.storage();
      store.ref('images/' +this.filename).put(this.image).then( img =>{
         img.ref.getDownloadURL().then(url =>{
             console.log(url);
             this.imgUrl=url;
             var db=firebase.firestore();
             db.collection('employees').where('id','==',this.$route.params.id).get().then(snapshot =>{
                 snapshot.forEach(doc =>{
                     doc.ref.update({imgUrl:this.imgUrl})

                 })
             })

             

         })
          

      })
      }
    },
  

    
        

    

}   
</script>

<style scoped>
#about{
    font-size: 25px;
}

</style>

