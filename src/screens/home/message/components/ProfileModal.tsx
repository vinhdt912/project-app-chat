import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import styles from "../../../../assets/styles/_message";

const ProfileModal: React.FC<any> = ({ isShow = false, toggle, user, handleLogout }) => {
  return (
    // <Modal animationType="slide" transparent={true} visible={isShow}>
    //   <View style={styles.centeredView}>
    //     <View style={styles.modalView}>
    //       <Text style={styles.title}>Are you sure to log out?</Text>
    //       <View style={styles.buttonContainer}>
    //         <TouchableOpacity style={styles.button} onPress={() => logout()}>
    //           <Text style={styles.textButton}>Yes</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity style={styles.button} onPress={() => toggle()}>
    //           <Text style={styles.textButton}>No</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>
    // </Modal>
    <Modal animationType="slide" transparent={true} visible={isShow}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={toggle}>
            <Text style={styles.modalClose}>Done</Text>
          </TouchableOpacity>
          <Image style={styles.userAvatar} source={require("../../../../assets/images/logo.png")} />
          <Text style={styles.userName}>{user.displayName}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={handleLogout}>
            <Ionicons style={styles.modalButtonIcon} name="log-out-outline" />
            <Text style={styles.modalButtonText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;
