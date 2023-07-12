<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;
    
    protected $connection = 'mongodb';
    protected $collection = 'certificates';

    protected $fillable = [
        'id_template',
        'id_logo',
        'id_student',
        'id_cd',
        'public_key'
    ];

    protected $casts = [
        'id_template'  => 'string',
        'id_logo'  => 'string',
        'id_student'  => 'string',
        'id_cd'  => 'string',
        'public_key' => 'string'
    ];

    public function student()
    {
        return $this->belongsTo(Student::class, 'id_student');
    }

    public function certificateData()
    {
        return $this->belongsTo(CertificateData::class, 'id_cd');
    }
    public function logo()
    {
        return $this->belongsTo(Logo::class, 'id_logo');
    }
    public function template()
    {
        return $this->belongsTo(Template::class, 'id_template');
    }
    protected $hidden = [
        'student',
        'certificateData',
        'logo',
        'template'
    ];
     public function toArray()
    {
        $array = parent::toArray();

        if ($this->relationLoaded('student')) {
            $array['id_student'] = $this->student;
        }

        if ($this->relationLoaded('certificateData')) {
            $array['id_cd'] = $this->certificateData;
        }
        if ($this->relationLoaded('logo')) {
            $array['id_logo'] = $this->logo;
        }
        if ($this->relationLoaded('template')) {
            $array['id_template'] = $this->template;
        }
        return $array;
    } 
}
