import React, {Component} from 'react';
import {app, database} from '../base';
import Styles from './style';

import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';

class Stats extends Component {
  state = {
    stats: [],
  };

  componentDidMount() {
    const stats = [];
    database
      .collection('users')
      .get()
      .then(data => {
        data.forEach(doc => stats.push(doc.data()));
      })
      .then(() => this.setState({stats}));
  }

  itemSeparator = () => <View style={Styles.separator} />;
  firstItem = () => (
    <View style={Styles.itemContainer}>
      <View>
        <Text style={Styles.lsitItem}>Player</Text>
      </View>
      <View>
        <Text style={Styles.lsitItem}>Score</Text>
      </View>
    </View>
  );
  Item = ({item: {username, score}}) => (
    <View style={Styles.itemContainer}>
      <View>
        {/* {console.log(item.item)} */}
        <Text style={Styles.lsitItem}>{username}</Text>
      </View>
      <View>
        <Text style={Styles.lsitItem}>{score}</Text>
      </View>
    </View>
  );
  render() {
    const {Item} = this;
    return (
      <>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity>
            <View style={Styles.button}>
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.button}>
              <Text>Play Again</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.flatList}>
          {/* {this.state.stats.length ? <Text>asda</Text> : <Text>loding ...</Text>} */}
          <FlatList
            data={this.state.stats}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={this.firstItem}
            stickyHeaderIndices={[0]}
          />
        </View>
      </>
    );
  }
}

export default Stats;
