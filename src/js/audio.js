import { Howl } from "howler";
import hitSound from "../audio/hit.mp3";
import missSound from "../audio/miss.mp3";
import scoreSound from "../audio/score.mp3";

class AudioManager {
  constructor() {
    this.sfx = {
      hit: new Howl({
        src: [hitSound],
        volume: 0.6,
      }),
      miss: new Howl({
        src: [missSound],
        volume: 0.6,
      }),
      score: new Howl({
        src: [scoreSound],
        volume: 0.6,
      }),
    };

    this.isMuted = localStorage.getItem("isMuted") === "true";
    this.updateMuteState();
  }

  playSfx(sound) {
    if (!this.isMuted && this.sfx[sound]) {
      this.sfx[sound].play();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem("isMuted", this.isMuted);
    this.updateMuteState();
  }

  updateMuteState() {
    if (this.isMuted) {
      Object.values(this.sfx).forEach((sound) => sound.mute(true));
    } else {
      Object.values(this.sfx).forEach((sound) => sound.mute(false));
    }
  }
}

// Create a single instance that will be shared across all pages
export const audioManager = new AudioManager();
