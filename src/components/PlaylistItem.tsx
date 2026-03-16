import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';
import { Playlist } from '../data/mockData';

interface PlaylistItemProps {
  playlist: Playlist;
  onPress?: () => void;
  onPlay?: () => void;
}

export const PlaylistItem: React.FC<PlaylistItemProps> = ({
  playlist,
  onPress,
  onPlay,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={{ uri: playlist.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {playlist.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          By {playlist.artist} · {playlist.songCount} Songs
        </Text>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={onPlay}
        activeOpacity={0.7}
      >
        <Ionicons name="play" size={16} color={Colors.background} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
  },
  info: {
    flex: 1,
    gap: Spacing.xs,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: '600',
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: FontSize.sm,
  },
  playButton: {
    width: 36,
    height: 36,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
  },
});
