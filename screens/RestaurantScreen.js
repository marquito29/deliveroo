import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import DishRow from '../components/DishRow'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../Sanity'
import BasketIcon from '../components/BasketIcon'
import { setRestaurant } from '../features/restaurantSlice'

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {
        params: {
            id,
            imgurl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        },
    } = useRoute();

useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: false,
  });
}, []);

useEffect(() => {
  dispatch(setRestaurant({
    id,
    imgurl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  }))
}, [dispatch])


  return (
    <>
    <BasketIcon />

    <ScrollView>
        <View className='relative'>
        <Image 
            source={{
                uri: imgurl
            }}
            className='h-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
            <ArrowLeftIcon size={20} color='#00CCBB' />
        </TouchableOpacity>
        </View>

        <View className='bg-white'>
            <View className='px-4 pt-4'>
                <Text className='text-3xl font-bold'>{title}</Text>
                <View className='flex-row space-x-2 my-1'>
                    <View className='flex-row items-center space-x-1'>
                        <StarIcon color='green' opacity={0.5} size={22} />
                        <Text>
                            <Text className='text-green-500'>{rating}</Text> - {genre}
                        </Text>
                    </View>
                    <View className='flex-row items-center space-x-1'>
                        <MapPinIcon color='gray' opacity={0.4} size={22} />
                        <Text>
                            <Text className='text-gray-500'>Nearby {address}</Text>
                        </Text>
                    </View>
                </View>
                <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
            </View>

            <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-3'>
                <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
                <Text className='pl-2 flex-1 text-md font-bold'>
                    Have a food allergy?
                </Text>
                <ChevronRightIcon color='#00CCBB' />
            </TouchableOpacity>
        </View>

        <View className='pb-36'>
            <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                Menu
            </Text>

            {/* Dishrows */}
            {dishes.map((dish) => (
                <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                img={dish.image}
                />
            ))}

        </View>

    </ScrollView>
    </>
  )
}

export default RestaurantScreen