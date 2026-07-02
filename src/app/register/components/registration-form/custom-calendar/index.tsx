'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarStyles } from './styles';

interface CustomCalendarProps {
  value: string;
  onChange: (date: string) => void;
  disablePastDates?: boolean;
  minYear?: number;
  maxYear?: number;
}

const indonesianMonths = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const indonesianDays = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

export function CustomCalendar({ value, onChange, disablePastDates = true, minYear = 1900, maxYear = new Date().getFullYear() + 10 }: CustomCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    return { daysInMonth, startingDay };
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value);
    setCurrentDate(new Date(currentDate.getFullYear(), newMonth, 1));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value);
    setCurrentDate(new Date(newYear, currentDate.getMonth(), 1));
  };

  const selectDate = (day: number) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Prevent selecting past dates if enabled
    if (disablePastDates && selectedDate < today) {
      return;
    }
    
    // Format date using local timezone to avoid timezone offset issues
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const formattedDate = `${year}-${month}-${dayStr}`;
    onChange(formattedDate);
    setIsOpen(false);
  };

  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return 'Pilih tanggal';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
  const days = [];

  // Empty cells for days before the first day of the month
  for (let i = 0; i < startingDay; i++) {
    days.push(<div key={`empty-${i}`} className={calendarStyles.day.empty}></div>);
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const dateStr = `${year}-${month}-${dayStr}`;
    const isSelected = value === dateStr;
    const isToday = new Date().toISOString().split('T')[0] === dateStr;
    const isPast = new Date(currentDate.getFullYear(), currentDate.getMonth(), day) < new Date(new Date().setHours(0, 0, 0, 0));

    days.push(
      <button
        key={day}
        onClick={() => selectDate(day)}
        disabled={disablePastDates && isPast}
        className={`${calendarStyles.day.button} ${isSelected ? calendarStyles.day.selected : ''} ${isToday ? calendarStyles.day.today : ''} ${disablePastDates && isPast ? calendarStyles.day.disabled : ''}`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className={calendarStyles.container}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={calendarStyles.input}
      >
        {formatDateDisplay(value)}
      </button>

      {isOpen && (
        <div className={calendarStyles.popup}>
          <div className={calendarStyles.header}>
            <button
              type="button"
              onClick={previousMonth}
              className={calendarStyles.navButton}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className={calendarStyles.selectors}>
              <select
                value={currentDate.getMonth()}
                onChange={handleMonthChange}
                className={calendarStyles.monthSelect}
              >
                {indonesianMonths.map((month, index) => (
                  <option key={month} value={index}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                value={currentDate.getFullYear()}
                onChange={handleYearChange}
                className={calendarStyles.yearSelect}
              >
                {Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={nextMonth}
              className={calendarStyles.navButton}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className={calendarStyles.daysHeader}>
            {indonesianDays.map((day) => (
              <div key={day} className={calendarStyles.dayName}>
                {day}
              </div>
            ))}
          </div>

          <div className={calendarStyles.daysGrid}>
            {days}
          </div>
        </div>
      )}
    </div>
  );
}
