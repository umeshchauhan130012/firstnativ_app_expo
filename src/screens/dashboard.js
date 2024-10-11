import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'

const Dashboard = ({route}) => {
  const {myName} = route.params;
  return (
    <View style={styles.pageWrapper}>
      <View style={styles.topbar}>
        <View style={styles.topbarLeft}>
          <View style={styles.topbarImg}>
            <Image style={styles.img} source={require('../images/user.png')} />
          </View>
          <View style={styles.topbarContent}>
            <Text style={styles.topbarName}>Umesh</Text>
            <Text style={styles.topbarPlace}>Dealer</Text>
          </View>
        </View>
        <View style={styles.topbarRight}>
          <Image style={styles.notification} source={require('../images/notification.png')} />
          <Text style={styles.notificationLbl}></Text>
        </View>
      </View>

      <View style={styles.cardbox}>
        <View style={styles.cardboxItem}>
          <View style={styles.cardboxItemIn}>
            <View style={styles.cardboxItemStatus}>
              <Text style={[styles.cardstatus, styles.cardopen]}>Open</Text>
              <Image style={styles.cardopenImg} source={require('../images/truckfast.png')} />
            </View>
            <Text style={styles.cardopenRs}>700</Text>
            <Text style={styles.cardDeli}>Deliveries</Text>
          </View>
        </View>
        <View style={styles.cardboxItem}>
          <View style={styles.cardboxItemIn}>
            <View style={styles.cardboxItemStatus}>
              <Text style={[styles.cardstatus, styles.cardinStock]}>In Stock</Text>
              <Image style={styles.cardopenImg} source={require('../images/shop.png')} />
            </View>
            <Text style={styles.cardopenRs}>700</Text>
            <Text style={styles.cardDeli}>Deliveries</Text>
          </View>
        </View>
        <View style={styles.cardboxItem}>
          <View style={styles.cardboxItemIn}>
            <View style={styles.cardboxItemStatus}>
              <Text style={[styles.cardstatus, styles.cardTransfor]}>In Transfer</Text>
              <Image style={styles.cardopenImg} source={require('../images/truckfast.png')} />
            </View>
            <Text style={styles.cardopenRs}>700</Text>
            <Text style={styles.cardDeli}>Deliveries</Text>
          </View>
        </View>
        <View style={styles.cardboxItem}>
          <View style={styles.cardboxItemIn}>
            <View style={styles.cardboxItemStatus}>
              <Text style={[styles.cardstatus, styles.cardSold]}>Sold out</Text>
              <Image style={styles.cardopenImg} source={require('../images/shoppingbag.png')} />
            </View>
            <Text style={styles.cardopenRs}>700</Text>
            <Text style={styles.cardDeli}>Deliveries</Text>
          </View>
        </View>
      </View>

      <View style={styles.orderlistview}>
        <Text style={styles.orderlisttitle}>Recent Orders</Text>
        <Text style={styles.orderlistsubTitle}>Track your order in real time</Text>
        <View style={styles.orderlistviewContain}>
          <View style={styles.orderlistItem}>
            <View style={styles.orderlistItemleft}>
              <Text style={styles.orderlistItemtitle}>REF #12211609</Text>
              <Text style={styles.orderlistItemsubtitle}>5 items . 1 hour ago</Text>
            </View>
            <View style={styles.orderlistItemright}>
              <Text style={styles.orderlistinLeft}>OPEN</Text>
            </View>
          </View>
        </View>
      </View>
      
      <Text>Dashboard {myName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pageWrapper: {
     width: '100%',
     height: '100%',
     backgroundColor: '#F3F1F1',
  },
  topbar: {
    backgroundColor: '#ffffff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topbarLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
    },
    notification: {
      height: 35,
      width: 35,
    },
  topbarRight: {
    position: 'relative',
  },
  topbarContent: {
    paddingStart: 15,
  },
  topbarName: {
    fontSize: 17,
    fontWeight: 500
  },
  topbarPlace: {
    fontSize: 16,
    color: '#333333'
  },
  notificationLbl: {
    height: 13,
    width: 13,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: 'red',
    borderRadius: 100,
    position: 'absolute',
    right: 3,
    top: 2,
  },
  cardbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 7,
    paddingTop: 20,
  },
  cardboxItem: {
    width: '50%',
    paddingHorizontal: 7,
    paddingVertical: 7,
  },
  cardstatus: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  cardopen: {
    color: 'green',
  },
  cardboxItemStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardopenImg: {
    height: 30,
    width: 30,
  },
  cardDeli: {
    fontSize: 16,
    color: '#4e4e4e'
  },
  cardopenRs: {
    fontSize: 21,
    fontWeight: 700,
    paddingVertical:10,
  },
  cardboxItemIn: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  orderlistview: {
    paddingHorizontal: 15,
  },
  orderlisttitle: {
    fontSize: 25,
    fontWeight: 700,
    paddingTop: 30,
  },
  orderlistsubTitle: {
    fontSize: 16,
    color: "gray",
    paddingTop: 5,
  },
  orderlistviewContain: {
    borderWidth: 2,
    borderColor: 'red',
  },
  orderlistItem: {
    borderWidth: 2,
    borderColor: 'green',
  },
  orderlistItemright: {
    borderWidth: 2,
    borderColor: 'pink',
  },
  orderlistinLeft: {
    fontSize: 16,
    color: 'yellow',
  },
  orderlistItemleft: {
    borderWidth: 2,
    borderColor: 'green',
  },
  orderlistItemtitle: {
    fontSize: 10,
    fontWeight: 700,
  },
  orderlistItemsubtitle: {
    fontSize: 10,
    fontWeight: 700,
  }

});

export default Dashboard;