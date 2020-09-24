import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { globalstyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema=yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is num 1-5','Rating must be a number 1-5',(val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0;
    }),
})

export default function ReviewForm({addReview}) {

  return (
    
    <View style={globalstyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values,actions) => {
            addReview(values);
            actions.resetForm();
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalstyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalstyles.errorText}>{props.touched.title && props.errors.title} </Text>

            <TextInput
              style={globalstyles.input}
              multiline minHeight={60}
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
             <Text style={globalstyles.errorText}>{props.touched.body && props.errors.body} </Text>

            <TextInput 
              style={globalstyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalstyles.errorText}>{props.touched.rating && props.errors.rating} </Text>
            <FlatButton text="submit" onPress={props.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
    
  );
}
