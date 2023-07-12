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
}
