import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src='images/BV-Acharya-16.jpg'
            text='Sparsha Trust'
            label='Education for the underpriveleged'
            
            path='/underprevkids'
            />
            <CardItem
              src='images/committee-reports-animal-welfare-2019-2020.jpg'
              text='Love for the Forgotten'
              label='Animal Welfare'
              path='/animalwelfare'
            />
          </ul>
          <ul className='cards__items'>
            {/* <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            /> */}
            <CardItem
              src='images/001Dharavi-pipe-09-EDIT.jpg'
              text='TransformSlums'
              label='Housing in Slums'
              path='/products'
            />
            <CardItem
              src='images/depositphotos_558619416-stock-illustration-child-victim-violence-little-girl.jpg'
              text='Hopes Foundation'
              label='Sexual Abuse'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
