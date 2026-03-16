import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing } from '../constants/theme';
import { CategoryTabs } from '../components/CategoryTabs';
import { PlaylistItem } from '../components/PlaylistItem';
import { MiniPlayer } from '../components/MiniPlayer';
import { dailyPlaylists, myMusicTabs, nowPlayingSong } from '../data/mockData';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MyMusicScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export const MyMusicScreen: React.FC<MyMusicScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={28} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Music</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons
            name="ellipsis-horizontal"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <View style={styles.tabsContainer}>
        <CategoryTabs
          tabs={myMusicTabs}
          activeTab={activeTab}
          onTabPress={setActiveTab}
        />
      </View>

      {/* Playlist List */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {dailyPlaylists.map((playlist) => (
          <PlaylistItem
            key={playlist.id}
            playlist={playlist}
            onPress={() => navigation.navigate('NowPlaying')}
            onPlay={() => navigation.navigate('NowPlaying')}
          />
        ))}
        {/* Bottom spacing for mini player + tab bar */}
        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayerContainer}>
        <MiniPlayer
          title={nowPlayingSong.title}
          artist={nowPlayingSong.artist}
          imageUrl={nowPlayingSong.imageUrl}
          isPlaying={isPlaying}
          onPress={() => navigation.navigate('NowPlaying')}
          onPlayPause={() => setIsPlaying(!isPlaying)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  headerTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '700',
  },
  tabsContainer: {
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.lg,
  },
  miniPlayerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: Spacing.sm,
  },
});
