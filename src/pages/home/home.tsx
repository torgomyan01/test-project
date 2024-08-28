import React, { useState } from 'react';
import './style.scss';
import { Button, Slider, styled, TextField } from '@mui/material';
import { getBase64 } from '../../utils/helpers';
import Draggable from 'react-draggable';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

function Home() {
  const [opacity, setOpacity] = useState<number>(75);
  const [projectUrl, setProjectUrl] = useState<string>('');
  const [width, setWidth] = useState<string | number>('');
  const [height, setHeight] = useState<string | number>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  function ForSelectImage(e: any) {
    const files = e.target.files;

    getBase64(files[0], function (res: string) {
      setImageUrl(res);

      const img = new Image();
      img.src = res;
      img.onload = () => {
        setWidth(img.width);
        setHeight(img.height);
      };
    });
  }

  return (
    <>
      <Draggable>
        <div className="all-params">
          <p className="fs-14 title">Opacity Real Site</p>
          <Slider
            size="small"
            value={opacity}
            min={0}
            max={100}
            onChange={(e, value) => (typeof value === 'number' ? setOpacity(value) : setOpacity(0))}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <TextField
            fullWidth
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            label="Url Project"
            variant="outlined"
            className="mb-3"
          />
          <Button component="label" role={undefined} variant="contained" tabIndex={-1}>
            Upload Design Image
            <VisuallyHiddenInput type="file" accept=".png,.jpg,.jpeg" onChange={ForSelectImage} />
          </Button>
          <Button variant="contained" fullWidth className="mt-5">
            Start
          </Button>
        </div>
      </Draggable>
      <div className="visual-box">
        <img src={imageUrl} alt="" className="visual-box-img" />
        <iframe
          src={projectUrl}
          width={width}
          height={height}
          scrolling="no"
          style={{ opacity: opacity / 100 }}
          frameBorder="1"
        />
      </div>
    </>
  );
}

export default Home;
