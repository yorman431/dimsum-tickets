import React, { useState } from "react";
import DSShuttle from '@elliemae/ds-shuttle'
import { Folder, Tasks } from '@elliemae/ds-icons';
import styled from "styled-components";


export default function Virtualization10kRows() {
  const Div = styled.div`
  max-height: 500px
  `;
  
  const [items, setItems] = useState([
    {
      parent: null,
      icon: <Folder />,
      id: 'taskGroup',
      name: 'Task Groups',
    },
    {
      parent: null,
      icon: <Tasks />,
      id: 'task',
      name: 'Standalone Tasks',
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "c6305c14-1d36-47c5-8485-b9fb53b38558",
      "name": "cupidatat excepteur pariatur sit"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "01da74b4-5b02-43e5-9777-6537d80ffc3b",
      "name": "officia nostrud non elit"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "1b0c024b-c43e-4be0-abb6-76ec3ecf3d19",
      "name": "officia consequat ex laborum"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "942d9e76-9ebe-4f87-8d5e-93a469624cd2",
      "name": "duis labore in culpa"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "67a83014-b5e7-46c1-aa8e-9306ff628ddf",
      "name": "cillum consectetur nostrud eu"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "159ec3cf-07d8-4eb7-bdcb-a7e64e7026c3",
      "name": "et eu non duis"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "cfb651ff-6dc3-480d-bfb5-cef214007dd4",
      "name": "sint ad quis ex"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "9dbac622-31fd-47c2-8f38-d309fea736eb",
      "name": "consequat ea anim exercitation"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "ef70327a-6b74-40b2-8b16-45a6b532339d",
      "name": "eiusmod cupidatat anim officia"
    },
    {
      "parent": "taskGroup",
      "icon": <Folder />,
      "id": "612c71a2-7aa2-4bce-8e75-e392c15b331b",
      "name": "in commodo do qui"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "27eb892c-2666-4f0a-9f81-f7e80a00940b",
      "name": "cupidatat sint Lorem proident"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "654d3057-20f6-4afe-9dfd-d1fbd5c6fb7a",
      "name": "consectetur consequat mollit laboris"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "a2add0a3-1921-4cc1-88bc-fc5c28c134f5",
      "name": "consectetur voluptate consequat aliquip"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "c0231448-491c-4185-9f78-aa0ced608c9b",
      "name": "aliquip veniam ex irure"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "ad6fce66-53e4-435b-8b7c-72f13e417a5b",
      "name": "culpa mollit magna anim"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "a5815479-b9d6-4c1b-8437-4ec7e2749894",
      "name": "est nulla tempor non"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "b6e854fe-fa28-4100-a992-b6f23f0958a8",
      "name": "magna est irure duis"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "b8c0f773-d66f-4738-8b97-4e05f12984e2",
      "name": "sint anim consectetur ex"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "cf35cb01-9297-48cd-a1d7-d5c8969929c1",
      "name": "aliqua deserunt veniam do"
    },
    {
      "parent": "task",
      "icon": <Tasks />,
      "id": "0890eb11-488e-490b-92ec-f6f00bfd0e39",
      "name": "ea proident voluptate qui"
    }
  ]);
  
  console.log('items', items);
  return (
    <Div>
    <DSShuttle
    containerProps={{ id: 'my-custom-id' }}
    items={items}
    onTargetSortEnd={(...args) => console.log(...args)}
    />
    </Div>
    );
  }
