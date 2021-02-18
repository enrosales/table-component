import React from 'react';

type Props = {
  error: string;
};

export default function index({ error }: Props) {
  return <div>{error}</div>;
}
