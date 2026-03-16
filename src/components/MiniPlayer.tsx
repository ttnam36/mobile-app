import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

interface MiniPlayerProps {
  title: string;
  artist: string;
  imageUrl: string;
  isPlaying: boolean;
  onPress?: () => void;
  onPlayPause?: () => void;
  onShuffle?: () => void;
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ({
  title,
  artist,
  imageUrl,
  isPlaying,
  onPress,
  onPlayPause,
  onShuffle,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <View style={styles.content}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {artist}
          </Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity onPress={onPlayPause} activeOpacity={0.7}>
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={22}
              color={Colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShuffle} activeOpacity={0.7}>
            <Ionicons name="shuffle" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    marginHorizontal: Spacing.sm,
    overflow: 'hidden',
  },
  progressBar: {
    height: 2,
    backgroundColor: Colors.surfaceLight,
  },
  progressFill: {
    height: '100%',
    width: '35%',
    backgroundColor: Colors.primary,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.sm,
    gap: Spacing.sm,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.sm,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
    fontWeight: '600',
  },
  artist: {
    color: Colors.textSecondary,
    fontSize: FontSize.xs,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
});
