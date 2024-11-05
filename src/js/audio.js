import { Howl } from "howler";

class AudioManager {
  constructor() {
    this.bgMusic = new Howl({
      src: ["audio/background.mp3"],
      loop: true,
      volume: 0.5,
      autoplay: false,
    });

    this.sfx = {
      hit: new Howl({
        src: ["audio/hit.mp3"],
        volume: 0.6,
      }),
      miss: new Howl({
        src: ["audio/miss.mp3"],
        volume: 0.6,
      }),
      score: new Howl({
        src: ["audio/score.mp3"],
        volume: 0.6,
      }),
    };

    this.isMuted = localStorage.getItem("isMuted") === "true";
    this.updateMuteState();
  }

  playBgMusic() {
    if (!this.isMuted && !this.bgMusic.playing()) {
      this.bgMusic.play();
    }
  }

  stopBgMusic() {
    this.bgMusic.stop();
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
      this.bgMusic.mute(true);
      Object.values(this.sfx).forEach((sound) => sound.mute(true));
    } else {
      this.bgMusic.mute(false);
      Object.values(this.sfx).forEach((sound) => sound.mute(false));
    }
  }
}

export const audioManager = new AudioManager();
