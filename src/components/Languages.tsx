import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export const Languages = () => {
  const {t, i18n} = useTranslation(); // destructure i18n here
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('en');
  const [items, setItems] = useState([{label: 'English', value: 'en'}]);

  useEffect(() => {
    i18n.changeLanguage(value);
  }, [value]);

  return (
    <View>
      <Text>{t('dummyNamespace.medium')}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};
