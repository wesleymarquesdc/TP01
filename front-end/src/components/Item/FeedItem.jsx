import "../../pages/DashboardPage/Dashboard.css";

import React from 'react';
import ViewMoreButton from "../Button/ViewMoreButton";
import CloseButton from "../Button/CloseButton";
import Item from "./Item";
import ExpandedItem from "./ExpandedItem";
import SlideInModalItem from "./SlideInModalItem";
import ChatButton from "../Button/ChatButton";

/* mode é para definir se a visualizacao dos dados completos sera via 'slide-in-modal' ou 'expanded' */
const FeedItem = ({ item, mode='slide-in-modal', estiloBotao}) => {
  let expandedOrSlideInModal = false;

  if(mode == 'slide-in-modal') expandedOrSlideInModal = true;

  return expandedOrSlideInModal ? (
      <SlideInModalItem item={item} estiloBotao={estiloBotao}> 
        <ChatButton> Entrar em contato</ChatButton>
      </SlideInModalItem>
    ) : (
      <ExpandedItem item={item} estiloBotao={estiloBotao}></ExpandedItem>
  );
};


export default FeedItem;