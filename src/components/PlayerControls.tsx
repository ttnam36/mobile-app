import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing } from '../constants/theme';

interface PlayerControlsProps {
  isPlaying: boolean;
  currentTime: string;
  remainingTime: string;
  progress: number;
  onPlayPause?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onShuffle?: () => void;
  onQueue?: () => void;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  currentTime,
  remainingTime,
  progress,
  onPlayPause,
  onNext,
  onPrevious,
  onShuffle,
  onQueue,
}) => {
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]}>
            <View style={styles.progressDot} />
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{currentTime}</Text>
          <Text style={styles.time}>{remainingTime}</Text>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={onShuffle} activeOpacity={0.7}>
          <Ionicons name="shuffle" size={24} color={Colors.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPrevious} activeOpacity={0.7}>
          <Ionicons name="play-skip-back" size={28} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playButton}
          onPress={onPlayPause}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isPlaying ? 'pause' : 'play'}
            size={32}
            color={Colors.background}
            style={!isPlaying ? { marginLeft: 3 } : undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext} activeOpacity={0.7}>
          <Ionicons name="play-skip-forward" size={28} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onQueue} activeOpacity={0.7}>
          <Ionicons name="options-outline" size={24} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xxl,
    gap: Spacing.lg,
  },
  progressContainer: {
    gap: Spacing.sm,
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.surfaceLight,
    borderRadius: 2,
    overflow: 'visible',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'visible',
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    position: 'absolute',
    right: -6,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: Colors.textSecondary,
    fontSize: FontSize.sm,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
