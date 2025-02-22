import React, { useState } from "react";
import axios from "axios";
import { 
  Card, ProfileWrapper, Profile, User, Info, Top, 
  BadgeWrapper, Badge, Title, Icon, Actions, Container, RightTop, ReviewText,
  EditContainer, EditInput, SaveButton
} from "./ReviewCard.style";

const ReviewCard = ({ review, onDelete }) => {
  const { id, scholarshipName, isAwarded, applicationYear, applicationSemester, content, scholarshipId } = review;
  
  const [newContent, setNewContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButton = () => {
    setIsEditing(true);
  };

  const handleContentChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleSaveButton = async () => {
    setIsEditing(false);
    const token = localStorage.getItem("token");

    setNewContent(newContent);

    const updatedReview = {
      id,
      scholarshipId,
      isAwarded,
      applicationYear,
      applicationSemester,
      content: newContent,
    };

    try {
      const response = await axios.patch(
        `http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/reviews/${id}`,
        updatedReview,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data && response.data.content) {
        setNewContent(response.data.content);
      }
    } catch (error) {
      alert("리뷰 수정에 실패했습니다.");
    }
  };

  const handleDeleteButton = async () => {
    if(!window.confirm("리뷰를 삭제하시겠습니까?")){
      return;
    }
    
    onDelete(id);
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`http://ewhascholarship.ap-northeast-2.elasticbeanstalk.com/api/reviews/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

    } catch (error) {
      alert("리뷰 삭제에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Card>
        <ProfileWrapper>
          <Profile>
            <User src="/user.png" alt="user_icon" />
            <Info>
              <Top>
                나
                <BadgeWrapper>
                  <Badge>{isAwarded ? "수혜함" : "수혜안함"}</Badge>
                  <Badge>{applicationYear}-{applicationSemester}</Badge>
                </BadgeWrapper>
              </Top>
              <RightTop>
                <Actions onClick={handleEditButton}>수정</Actions>
                <Actions onClick={handleDeleteButton}>삭제</Actions>
              </RightTop>
              <Title>
                <Icon>🏆</Icon> {scholarshipName}
              </Title>
              {isEditing ? (
                <EditContainer>
                  <EditInput 
                    type="text" 
                    value={newContent} 
                    onChange={handleContentChange} 
                  />
                  <SaveButton onClick={handleSaveButton}>완료</SaveButton>
                </EditContainer>
              ) : (
                <ReviewText>{newContent}</ReviewText>
              )}
            </Info>
          </Profile>
        </ProfileWrapper>
      </Card>
    </Container>
  );
};

export default ReviewCard;
