import React, { FC } from "react";
import {
  View,
} from "react-native";

//components
import { TextApp } from "../../components/textApp/TextApp";
import { ButtonSection } from "../../components/buttonSection/ButtonSection";
import { Container } from "../../components";
import { styles } from "./pokemonInfo.style";
import { PokemonInfoViewT } from "./pokemonInfo.type";

export const PokemonInfoView: FC<PokemonInfoViewT> = ({
  backgroundColor,
  selectedView,
  setSelectedView,
  pokemon,
  isLoading
}) => {

  return (
    <Container backgroundColor={backgroundColor} isLoading={isLoading}>
      <View style={styles.info}>
        <TextApp style={styles.title} title={pokemon.name} />
        <TextApp style={styles.desc} title={pokemon.desc} />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "stretch",
            marginHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <ButtonSection
            title={"STATS"}
            color={backgroundColor}
            isSelected={selectedView === "stats"}
            onPress={() => setSelectedView('stats')}
          />
          <ButtonSection
            color={backgroundColor}
            title={"EVOLUTIONS"}
            isSelected={selectedView === "evolutions"}
            onPress={() => setSelectedView('evolutions')}
          />
          <ButtonSection
            color={backgroundColor}
            title={"MOVES"}
            isSelected={selectedView === "moves"}
            onPress={() => setSelectedView('moves')}
          />
        </View>
      </View>
    </Container>
  );

  // return (
  //   <ScrollView style={{
  //     backgroundColor:loading?
  //     '#fff'
  //     :
  //     COLOR
  //   }}
  //     contentContainerStyle={
  //       loading?
  //       styles.loading
  //       :
  //       styles.container
  //     }>
  //     {
  //       loading?
  //       <ActivityIndicator size={'large'} color={'#f00000'} />
  //       :
  //       <>
  //         <StatusBar backgroundColor={COLOR} barStyle={'light-content'} />
  //         <View style={styles.info}>
  //           <TextApp
  //           style={styles.title}
  //           title={pokemon.name} />
  //           <TextApp
  //           style={styles.desc}
  //           title={pokemon.desc}
  //           />
  //           <View style={{
  //             flexDirection:'row',
  //             alignSelf:'stretch',
  //             marginHorizontal:20,
  //             justifyContent:'space-between',
  //             }}>
  //             <ButtonSection
  //             title={'STATS'}
  //             backgroundColor={COLOR}
  //             onPress={() => handlePress('stats')}
  //             selected={view==='stats'?true:false} />
  //             <ButtonSection
  //             title={'EVOLUTIONS'}
  //             backgroundColor={COLOR}
  //             onPress={() => handlePress('evolutions')}
  //             selected={view==='evolutions'?true:false} />
  //             <ButtonSection
  //             title={'MOVES'}
  //             backgroundColor={COLOR}
  //             onPress={() => handlePress('moves')}
  //             selected={view==='moves'?true:false} />
  //           </View>
  //           {
  //             view==='stats'?
  //             <PokemonStats color={COLOR} stats={pokemon.stats} abilities={pokemon.abilities}/>
  //             :
  //             (
  //               view==='evolutions'?
  //               <PokemonEvolutions/>
  //               :
  //               <PokemonMoves/>
  //             )
  //           }
  //         </View>
  //         <Image
  //           resizeMode={'contain'}
  //           style={{
  //             width:175,
  //             height:175,
  //             position:'absolute',
  //             top:50
  //           }}
  //           source={{uri:pokemon.sprite}} />
  //       </>
  //     }
  //   </ScrollView>
  // )
};
