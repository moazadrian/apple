module.exports = {
    module: {
      rules: [
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'videos', // Optional: folder to save video files
          },
        },
        // other rules...
      ],
    },
  };
  