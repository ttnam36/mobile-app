import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';
import { CategoryTabs } from '../components/CategoryTabs';
import { FeaturedCard } from '../components/FeaturedCard';
import { PlaylistItem } from '../components/PlaylistItem';
import {
  categories,
  userProfile,
  featuredPlaylist,
  dailyPlaylists,
  nowPlayingSong,
} from '../data/mockData';
import { MiniPlayer } from '../components/MiniPlayer';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: userProfile.avatar }}
            style={styles.avatar}
          />
          <View style={styles.headerRight}>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="search" size={24} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="heart-outline" size={24} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>Hi, {userProfile.name}</Text>

        {/* Category Tabs */}
        <View style={styles.section}>
          <CategoryTabs
            tabs={categories}
            activeTab={activeCategory}
            onTabPress={setActiveCategory}
          />
        </View>

        {/* Curated & Trending */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Curated & trending</Text>
        </View>
        <FeaturedCard
          title={featuredPlaylist.title}
          description={featuredPlaylist.description}
          imageUrl={featuredPlaylist.imageUrl}
        />

        {/* Top Daily Playlists */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top daily playlists</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>

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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.md,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  headerRight: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  greeting: {
    color: Colors.textPrimary,
    fontSize: FontSize.xxxl,
    fontWeight: '700',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  section: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: '700',
    paddingHorizontal: Spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: Spacing.lg,
  },
  seeAll: {
    color: Colors.textSecondary,
    fontSize: FontSize.md,
  },
  miniPlayerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: Spacing.sm,
  },
});
