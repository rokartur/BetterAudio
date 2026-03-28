/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** CLI Path - Custom path to the betteraudio CLI binary. Leave empty for auto-detection. */
  "cliPath"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `manage-apps` command */
  export type ManageApps = ExtensionPreferences & {}
  /** Preferences accessible in the `list-devices` command */
  export type ListDevices = ExtensionPreferences & {}
  /** Preferences accessible in the `set-volume` command */
  export type SetVolume = ExtensionPreferences & {}
  /** Preferences accessible in the `volume-up` command */
  export type VolumeUp = ExtensionPreferences & {}
  /** Preferences accessible in the `volume-down` command */
  export type VolumeDown = ExtensionPreferences & {}
  /** Preferences accessible in the `toggle-mute` command */
  export type ToggleMute = ExtensionPreferences & {}
  /** Preferences accessible in the `toggle-silent-mode` command */
  export type ToggleSilentMode = ExtensionPreferences & {}
  /** Preferences accessible in the `cycle-device` command */
  export type CycleDevice = ExtensionPreferences & {}
  /** Preferences accessible in the `now-playing` command */
  export type NowPlaying = ExtensionPreferences & {}
  /** Preferences accessible in the `play-pause` command */
  export type PlayPause = ExtensionPreferences & {}
  /** Preferences accessible in the `next-track` command */
  export type NextTrack = ExtensionPreferences & {}
  /** Preferences accessible in the `previous-track` command */
  export type PreviousTrack = ExtensionPreferences & {}
  /** Preferences accessible in the `apply-profile` command */
  export type ApplyProfile = ExtensionPreferences & {}
  /** Preferences accessible in the `bluetooth-devices` command */
  export type BluetoothDevices = ExtensionPreferences & {}
  /** Preferences accessible in the `status` command */
  export type Status = ExtensionPreferences & {}
  /** Preferences accessible in the `toggle-panel` command */
  export type TogglePanel = ExtensionPreferences & {}
  /** Preferences accessible in the `menu-bar` command */
  export type MenuBar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `manage-apps` command */
  export type ManageApps = {}
  /** Arguments passed to the `list-devices` command */
  export type ListDevices = {}
  /** Arguments passed to the `set-volume` command */
  export type SetVolume = {
  /** 0-100 */
  "level": string
}
  /** Arguments passed to the `volume-up` command */
  export type VolumeUp = {}
  /** Arguments passed to the `volume-down` command */
  export type VolumeDown = {}
  /** Arguments passed to the `toggle-mute` command */
  export type ToggleMute = {}
  /** Arguments passed to the `toggle-silent-mode` command */
  export type ToggleSilentMode = {}
  /** Arguments passed to the `cycle-device` command */
  export type CycleDevice = {}
  /** Arguments passed to the `now-playing` command */
  export type NowPlaying = {}
  /** Arguments passed to the `play-pause` command */
  export type PlayPause = {}
  /** Arguments passed to the `next-track` command */
  export type NextTrack = {}
  /** Arguments passed to the `previous-track` command */
  export type PreviousTrack = {}
  /** Arguments passed to the `apply-profile` command */
  export type ApplyProfile = {}
  /** Arguments passed to the `bluetooth-devices` command */
  export type BluetoothDevices = {}
  /** Arguments passed to the `status` command */
  export type Status = {}
  /** Arguments passed to the `toggle-panel` command */
  export type TogglePanel = {}
  /** Arguments passed to the `menu-bar` command */
  export type MenuBar = {}
}

