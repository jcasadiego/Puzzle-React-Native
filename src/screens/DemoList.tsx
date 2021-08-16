//Packages
import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';

//components
import { Screen } from '../../src/components';
import { STYLES } from '../../src/constants';


interface Ihero{
  item: {
    id?: any,
    name?: any
  }
}

export default function DemoList() {

  const [superHeroes, setSuperHeroes] = useState([])

  const handleGetHeroes = async () => {
    const resp = await fetch('https://akabab.github.io/superhero-api/api/all.json');
    return await resp.json()
  }

  useEffect(() => {
    handleGetHeroes().then(resp => {
      setSuperHeroes(resp)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  const renderHeroe = ({item}: Ihero) => {
    return (
      <Text style={{color: "black"}}>{item.name}</Text>
    )
  }

  return (
    <Screen>
      <FlatList
        style={{ padding: STYLES.padding.xl }}
        renderItem={renderHeroe}
        data={superHeroes}
        keyExtractor={item => item.id}
        >
      </FlatList>
    </Screen>
  )
}