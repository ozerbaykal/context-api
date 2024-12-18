import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Loading from '../components/Loading';
import Error from '../components/Error';

const TaskScreen = () => {
   const {tasks,error,loading }= useContext(TaskContext)
   

   


   //const task =tasks.find(task=>task.id===userId)


  return (
    <View>
      {
        loading? <Loading/> : error ? <Error/>:
 
          <FlatList
          data={tasks}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=>(
            <View style ={styles.item}>
              <Text  style ={styles.title}>
              {item.title.length > 20 ? item.title.slice(0,30) + "...":item.title}


              </Text>
              <Button title="Delete" color={"red"}   />

            </View>


       
          )

          
          }
          >

          </FlatList>

 
      }
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  item:{
    padding:15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginHorizontal:8,
    marginVertical:15,
    backgroundColor:"#ee4e",
    borderRadius:10,
    shadowColor:"#000",
    shadowOffset:{width:3,height:3},
    shadowOpacity:0.3,
    shadowRadius:4

  },
  title:{
color:"#000",
fontSize:17,fontWeight:"500"

  },
   
});
