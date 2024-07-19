import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key:string,value:[]) => {
  try{
    if(typeof value === 'object'){
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue)
    }else{
      await AsyncStorage.setItem(key,value)
    }
  } catch(e) {
    console.log(e)
  }
}

export const getData = async (key:string) => {
  try{
    const value = await AsyncStorage.getItem(key)
    if(value !== null){
      if(typeof value === 'object'){
        return JSON.parse(value);
      }
      return value;
    }
  }catch(e){
    console.log(e)
  }
}

export const removeData = async (key:string) => {
  try{
    await AsyncStorage.removeItem(key)
  } catch (error){
    console.log(error)
  }
}