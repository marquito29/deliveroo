import { ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import CategoryCard from './CategoryCard';
import saniClient, { urlFor } from '../Sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    saniClient.fetch(`
      *[_type == 'category']
    `).then(data => {
      setCategories(data);
    });
  }, [])
  

  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        >

        {/* CategoryCard */}

        {categories.map((category) => (
        <CategoryCard 
        key={category._id}
        imgurl={urlFor(category.image).url()}
        title={category.name}
        />
        ))}

 
        
    </ScrollView>
  )
}

export default Categories;