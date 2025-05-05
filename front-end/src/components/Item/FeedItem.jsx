import "../../pages/DashboardPage/Dashboard.css";

import React from 'react';
import ViewMoreButton from "../Button/ViewMoreButton";
import CloseButton from "../Button/CloseButton";
import Item from "./Item";
import ExpandedItem from "./ExpandedItem";
import SlideInModalItem from "./SlideInModalItem";
import ChatButton from "../Button/ChatButton";
import { saveChatToDB } from "../../firebase/db";
import { useNavigate } from "react-router-dom";

/* mode é para definir se a visualizacao dos dados completos sera via 'slide-in-modal' ou 'expanded' */
const FeedItem = ({ item, mode='slide-in-modal', estiloBotao}) => {
  const navigate = useNavigate();

  let expandedOrSlideInModal = false;

  // CONEXÃO COM O BACK-END
  const handleSelect = async (userId, userDisplayName) => {
    await saveChatToDB(userId, userDisplayName)
    navigate(`/chat`);
  }
  /////////////////////////

  if(mode == 'slide-in-modal') expandedOrSlideInModal = true;

  return expandedOrSlideInModal ? (
      <SlideInModalItem item={item} estiloBotao={estiloBotao}> 
        <ChatButton onClick={() => handleSelect(item.userId, item.displayName)}> Entrar em contato</ChatButton>
      </SlideInModalItem>
    ) : (
      <ExpandedItem item={item} estiloBotao={estiloBotao}></ExpandedItem>
  );
};


export default FeedItem;