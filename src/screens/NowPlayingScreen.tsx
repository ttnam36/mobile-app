import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';
import { PlayerControls } from '../components/PlayerControls';
import { nowPlayingSong } from '../data/mockData';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');
const ALBUM_ART_SIZE = width * 0.65;

type NowPlayingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export const NowPlayingScreen: React.FC<NowPlayingScreenProps> = ({
  navigation,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={28} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <TouchableOpacity
          onPress={() => setIsFavorite(!isFavorite)}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? Colors.primary : Colors.white}
          />
        </TouchableOpacity>
      </View>

      {/* Album Art */}
      <View style={styles.albumContainer}>
        <Image
          source={{ uri: nowPlayingSong.imageUrl }}
          style={styles.albumArt}
        />
      </View>

      {/* Song Info */}
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{nowPlayingSong.title}</Text>
        <Text style={styles.songArtist}>{nowPlayingSong.albumArtist}</Text>
      </View>

      {/* Lyrics */}
      <View style={styles.lyricsContainer}>
        {nowPlayingSong.lyrics.split('\n').map((line, index) => (
          <Text
            key={index}
            style={[
              styles.lyricsLine,
              index === 1 && styles.lyricsLineActive,
            ]}
          >
            {line}
          </Text>
        ))}
      </View>

      {/* Player Controls */}
      <View style={styles.controlsContainer}>
        <PlayerControls
          isPlaying={isPlaying}
          currentTime="0:28"
          remainingTime="-2:15"
          progress={0.2}
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
    fontSize: FontSize.lg,
    fontWeight: '600',
  },
  albumContainer: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  albumArt: {
    width: ALBUM_ART_SIZE,
    height: ALBUM_ART_SIZE,
    borderRadius: ALBUM_ART_SIZE / 2,
  },
  songInfo: {
    alignItems: 'center',
    marginTop: Spacing.xxl,
    gap: Spacing.sm,
  },
  songTitle: {
    color: Colors.textPrimary,
    fontSize: FontSize.xxl,
    fontWeight: '700',
  },
  songArtist: {
    color: Colors.textSecondary,
    fontSize: FontSize.md,
  },
  lyricsContainer: {
    alignItems: 'center',
    marginTop: Spacing.xxl,
    paddingHorizontal: Spacing.xxxl,
    gap: Spacing.sm,
  },
  lyricsLine: {
    color: Colors.textMuted,
    fontSize: FontSize.md,
    textAlign: 'center',
    lineHeight: 22,
  },
  lyricsLineActive: {
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  controlsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: Spacing.xxxl,
  },
});
